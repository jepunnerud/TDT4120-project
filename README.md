## Project development setup

If you do not have yarn on your machine, cd to your machine's root folder and do:

```
npm install --global yarn
```

To run the backend development server, cd to /bookhub and do:

```
./pocketbase serve
```

If your system runs an x64 version of MacOS (i7), do:

```
./pocketbase64 serve
```

If your system runs an arm64 version of MacOS (M1, M2), do:

```
./pocketbaseArm serve
```

Open [http://127.0.0.1:8090/\_/](http://127.0.0.1:8090/_/) with your browser to get to the PocketBase admin ui.

To run the frontend development server, cd to /bookhub and do:

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

To learn more about PocketBase, take a look at the following resources:

- [PocketBase documentation](https://pocketbase.io/docs/)
- [PocketBase JavaScript SDK dokumentation](https://github.com/pocketbase/js-sdk)
