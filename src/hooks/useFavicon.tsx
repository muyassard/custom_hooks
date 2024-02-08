import { Button } from "antd";
import { useState } from "react";

const useFavicon = (faviconPath: string) => {
  const head = document.querySelector("head") as HTMLHeadElement;
  const link = document.createElement("link");

  link.setAttribute("rel", "icon");
  link.setAttribute("type", "image/png");
  link.setAttribute("href", faviconPath);

  head.appendChild(link);
};

export const Favicon: React.FC = () => {
  const [favi, setFavi] = useState(
    "https://icons.iconarchive.com/icons/designbolts/free-multimedia/48/Film-icon.png"
  );
  useFavicon(favi);

  return (
    <div className="h-[100%] m-5  grid place-items-center">
      <Button
        onClick={() => {
          setFavi(
            favi ===
              "https://icons.iconarchive.com/icons/designbolts/free-multimedia/48/Film-icon.png"
              ? "https://icons.iconarchive.com/icons/martz90/circle/48/video-camera-icon.png"
              : "https://icons.iconarchive.com/icons/designbolts/free-multimedia/48/Film-icon.png"
          );
        }}
      >
        Favi
      </Button>
    </div>
  );
};

// import * as React from "react";
// import { useFavicon } from "@uidotdev/usehooks";

// export default function App() {
//   const [favicon, setFavicon] = React.useState(
//     "https://ui.dev/favicon/favicon-32x32.png"
//   );

//   useFavicon(favicon);

//   return (
//     <section>
//       <h1>useFavicon</h1>

//       <button
//         title="Set the favicon to Bytes' logo"
//         className="link"
//         onClick={() =>
//           setFavicon("https://bytes.dev/favicon/favicon-32x32.png")
//         }
//       >
//         Bytes
//       </button>
//       <button
//         title="Set the favicon to React Newsletter's logo"
//         className="link"
//         onClick={() =>
//           setFavicon("https://reactnewsletter.com/favicon/favicon-32x32.png")
//         }
//       >
//         React Newsletter
//       </button>

//       <button
//         title="Set the favicon to uidotdev's logo"
//         className="link"
//         onClick={() => setFavicon("https://ui.dev/favicon/favicon-32x32.png")}
//       >
//         ui.dev
//       </button>
//     </section>
//   );
// }
