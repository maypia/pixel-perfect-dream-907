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

- Keep temporary categories and creator configuration in separate data modules so official research content can replace them without changing presentation.
- Manage the reflection session in a shared React provider with tab-scoped sessionStorage; hydrate storage after mount to preserve SSR consistency and back-navigation state.
- Intercept the existing Home start link through a display-contents boundary so new-session behavior does not alter the protected Home page or header.
- Use the centralized session model as the future local-backend seam; scanning remains an explicit disconnected placeholder until hardware integration is requested.
