<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep active portfolio facts in `premium-data.ts`; derive current case studies, chatbot facts and MCP projects from it to prevent contradictory claims.
- Preserve existing project slugs as explicitly unconfirmed archival entries when replacing unverified content so old links remain available.
- Keep the portfolio as one requested long scrolling page; use existing TanStack Start routes for resume and project details.
- Load GSAP/ScrollTrigger after hydration, scope animations for cleanup, and disable choreography for reduced motion to preserve SSR and accessibility.
- Contact inquiries use validated, encoded email drafts until a genuine delivery service is configured; never report them as sent.
