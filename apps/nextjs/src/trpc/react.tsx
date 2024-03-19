// "use client";

// import { useState } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { loggerLink, unstable_httpBatchStreamLink } from "@trpc/client";
// import { createTRPCReact } from "@trpc/react-query";
// import SuperJSON from "superjson";

// import type { AppRouter } from "@acme/api";

// export const api = createTRPCReact<AppRouter>();

// export function TRPCReactProvider(props: { children: React.ReactNode }) {
//   const [queryClient] = useState(() => new QueryClient());

//   const [trpcClient] = useState(() =>
//     api.createClient({
//       transformer: SuperJSON,
//       links: [
//         loggerLink({
//           enabled: (op) =>
//             process.env.NODE_ENV === "development" ||
//             (op.direction === "down" && op.result instanceof Error),
//         }),
//         unstable_httpBatchStreamLink({
//           url: getBaseUrl() + "/api/trpc",
//           headers() {
//             const headers = new Headers();
//             headers.set("x-trpc-source", "nextjs-react");
//             return headers;
//           },
//         }),
//       ],
//     }),
//   );

//   return (
//     <QueryClientProvider client={queryClient}>
//       <api.Provider client={trpcClient} queryClient={queryClient}>
//         {props.children}
//       </api.Provider>
//     </QueryClientProvider>
//   );
// }

// function getBaseUrl() {
//   if (typeof window !== "undefined") return window.location.origin;
//   if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
//   return `http://localhost:${process.env.PORT ?? 3000}`;
// }
// lib/reactQuery-provider.tsx

"use client";

import { useState } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const url = "http://localhost:3000/api/trpc";

// const TRPCReactProvider = ({ children }: { children: ReactNode }) => {
//   const { getToken } = useAuth();
//   const [queryClient] = useState(
//     () =>
//       new QueryClient({
//         defaultOptions: {
//           queries: {
//             refetchOnWindowFocus: false,
//           },
//         },
//       }),
//   );

//   const trpcClient = trpc.createClient({
//     links: [
//       httpBatchLink({
//         transformer: superjson,
//         url: url,
//         fetch(url, option) {
//           return fetch(url, {
//             ...option,
//             credentials: "include",
//           });
//         },
//         headers: async () => {
//           return {
//             Authorization: `${await getToken()}`,
//           };
//         },
//       }),
//     ],
//   });

//   return (
//     <trpc.Provider client={trpcClient} queryClient={queryClient}>
//       <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//     </trpc.Provider>
//     // <QueryClientProvider client={queryClient}>
//     //   <trpc.Provider client={trpcClient} queryClient={queryClient}>
//     //     {children}
//     //   </trpc.Provider>
//     // </QueryClientProvider>
//   );
// };
// const useTrpcClient = () => {
//   const { getToken } = useAuth();

//   const [trpcClient, setTrpcClient] = useState(() =>
//     createTrpcClient(url, getToken),
//   );

//   useEffect(() => {
//     setTrpcClient(() => createTrpcClient(url, getToken));
//   }, [url, getToken]);

//   const [queryClient] = useState(() => {
//     return new QueryClient({
//       defaultOptions: {
//         queries: {
//           retry: 1,
//         },
//       },
//     });
//   });

//   return {
//     trpcClient,
//     queryClient,
//   };
// };
// const createTrpcClient = (
//   url: string,
//   getToken: () => Promise<string | null>,
// ) => {
//   return trpc.createClient({
//     links: [
//       httpBatchLink({
//         transformer: superjson,
//         url: url,
//         fetch(url, option) {
//           return fetch(url, {
//             ...option,
//             credentials: "include",
//           });
//         },
//         headers: async () => {
//           return {
//             Authorization: `${await getToken()}`,
//           };
//         },
//       }),
//     ],
//     // transformer: SuperJSON,
//   });
// };

export function ClientProviders(props: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <InnerProvider>{props.children}</InnerProvider>
    </ClerkProvider>
  );
}
const InnerProvider = (props: { children: React.ReactNode }) => {
  // const { trpcClient, queryClient } = useTrpcClient();
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1,
        },
      },
    });
  });
  return (
    // <trpc.Provider client={trpcClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
    // </trpc.Provider>
  );
};
