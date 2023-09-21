import { useEffect } from "react";
import introJs from "intro.js";

const ReadingGuide = () => {
  const getCurrentTheme = () => {
    let colorMode = localStorage.getItem("chakra-ui-color-mode");

    return colorMode === "light" ? "customTooltip" : "customTooltipDark";
  };

  useEffect(() => {
    const intro = introJs();

    intro.setOptions({
      disableInteraction: true,
      steps: [
        {
          title: "Modal Entry",
          element: ".float-button",
          intro: "Click on the button to input data",
        },
      ],
      tooltipClass: getCurrentTheme(),
      dontShowAgain: false,
      dontShowAgainCookieDays: 1,
      showBullets: false,
    });
    intro.start();

    return () => {
      intro.exit();
    };
  }, []);
};

export default ReadingGuide;
