# Vyer front-end coding challenge

## Welcome!

Following is a brief introduction to our front-end coding challenge.

Goal of this challenge is to assess your programming and product development skills. Below you can find instructions on how to bootstrap the project, as well as set of user stories that describe the desired outcomes of the challenge. If you're familiar with Scrum or Kanban, you'll feel like home.

As a general recommendation, try not to spend more than an hour on actual coding. Off course, you're free to spend more time if you wish to do so.

We don't expect you to finish all of the user stories since there is limited time, instead focus on writing solutions that you are happy with. What we want to see is your coding style and how you approach problems. Likewise don't feel like you need to spend time on the design of the solution, the focus should be on the code.

As you probably know by now, we use React as a framework of choice for our flagship product and thus chose to use it for this challenge as well. The challenge is written in TypeScript. However, you're free to use JavaScript if you're not familiar with TypeScript. Similarly, you can use GitHub REST API if not comfortable with GitHub GraphQL API used in the challenge.

We wish you good luck and hope to talk to you soon!

### Prerequisites

Before you begin, familiarize yourself with the GitHub API of choice as you'll be asked to retrieve public data from GitHub. You can find links to the documentation in the references section. You'll also need to create GitHub Personal Access token with the following scopes:

```
repo
read:org
read:public_key
read:repo_hook
user
read:gpg_key
```

Once created, add your token to the `.env` file in the project root (next to `project.json`).

### Commands

Install dependencies:

```sh
npm install
```

Run development server:

```sh
npm run start
```

Run tests:

```sh
npm run test
```

### GraphQL type emission

The Relay Compiler will emit type information for TypeScript when converting GraphQL literals into generated files. To generate files from GraphQL queries, fragments, mutations and subscriptions run the following command each time you make a change to your GraphQL literals:

```
npm run relay
```

## About the challenge

The challenge is an imaginary 3rd-party GitHub public repository browser. We currently only support listing of repositories, but we would like to expand on that as a next step in feature development by adding information about issues for listed repositories.

You can find all the required features that need to be developed in a form of user stories below.

### User stories

- As an user I want to be able to see number of open issues for each repository item in the repository list on the repository card.
- As an user I want to be able to see list of all open issues containing the issue title, ordered ascending by date created, on a separate page for each repository item.
- As an user I want to be able to paginate list of issues for each repository item if more than 25 items are available.
- As an user I want to be able to search open issues based on their description.

## Resources

1. TypeScript: https://www.typescriptlang.org/docs/
1. React: https://reactjs.org/docs/getting-started.html
1. Relay: https://relay.dev/docs/
1. GitHub GraphQL API: https://docs.github.com/en/graphql
1. GitHub Search API: https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests
