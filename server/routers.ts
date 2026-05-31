import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContactSubmission } from "./db";
import { notifyOwner } from "./_core/notification";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Name must be at least 2 characters"),
          company: z.string().min(2, "Company must be at least 2 characters"),
          email: z.string().email("Invalid email address"),
          role: z.string().min(2, "Role must be at least 2 characters"),
          message: z.string().min(20, "Message must be at least 20 characters"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Store in database
          await createContactSubmission({
            name: input.name,
            company: input.company,
            email: input.email,
            role: input.role,
            message: input.message,
          });

          // Notify owner
          const notificationSent = await notifyOwner({
            title: "New Contact Form Submission",
            content: `New pilot request from ${input.name} at ${input.company}.\n\nEmail: ${input.email}\nRole: ${input.role}\n\nMessage:\n${input.message}`,
          });

          if (!notificationSent) {
            console.warn("[Contact] Owner notification failed, but submission was stored");
          }

          return { success: true };
        } catch (error) {
          console.error("[Contact] Submission failed:", error);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to submit form. Please try again later.",
          });
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
