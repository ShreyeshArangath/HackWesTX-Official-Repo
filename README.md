This is an updated version of the original HackWesTX website. Pulled together using [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

I want to add some things while I update the site to a more recent codebase.

- [ ] Migrate old site to Next, maybe divide up the bits so its not one big scroll
- [ ] Add firebase to the project
- [ ] Add notification features
- [ ] Before the countdown ends, just showcase the socials and sponsors
- [ ] Add messaging features to a cool console with specific admin login (easter egg?)
- [ ] After the countdown date, we open up a console that's fed info from firebase collection.


<details> 
  <summary>Logical flow</summary>
   Collection is populated by admin user, accessible by logging into the console using the correct password.
</details>

## Getting Started

You can run it yourself by running a development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
