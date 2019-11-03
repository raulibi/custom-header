import { huiRoot } from "./get-root";
import { styleHeader } from "./style-header";

export const observers = () => {
  const root = huiRoot.shadowRoot;
  const callback = mutations => {
      mutations.forEach(({ addedNodes, target }) => {
      if (target.className == "edit-mode" && addedNodes.length) {
          root.querySelector("app-header").style.visibility = "initial";
          root.querySelector("cch-header").remove();
          root.querySelector("#cch_header_style").remove();
      } else if (target.nodeName == "APP-HEADER" && addedNodes.length) {
          styleHeader();
      }
      });
  };
  let observer = new MutationObserver(callback);
  observer.observe(root.querySelector("app-header"), {
      childList: true
  });
}