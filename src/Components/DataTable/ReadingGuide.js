import { useEffect } from "react";
import introJs from "intro.js";

const ReadingGuide = () => {
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
      tooltipClass: "customTooltip",
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
