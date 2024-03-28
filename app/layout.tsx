import { ClientHeader } from "../libs/shared/ui/src";
import { Amplify } from "aws-amplify";
import { Toaster } from "react-hot-toast";
import awsExports from "@/aws-exports";

import "@aws-amplify/ui-react/styles.css";
import "react-phone-number-input/style.css";
import "react-toastify/dist/ReactToastify.css";

awsExports.oauth.domain = "auth.worldtradex.com";
awsExports.oauth.redirectSignIn =
  process.env.NX_AUTH_SIGN_IN_REDIRECT || "https://admin-micro-frontend.vercel.app/sso";
awsExports.oauth.redirectSignOut =
  process.env.NX_AUTH_SIGN_OUT_REDIRECT || "https://admin-micro-frontend.vercel.app/logout";
Amplify.configure(awsExports);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.worldtradex.com/css/theme.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.worldtradex.com/css/custom.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.worldtradex.com/css/feather-icons.css"
        />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossOrigin="anonymous"
          async
        ></script>
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"
          integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh"
          crossOrigin="anonymous"
          async
        ></script>
      </head>
      <body>
        <ClientHeader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
