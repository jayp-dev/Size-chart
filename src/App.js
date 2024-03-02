import React, { useEffect } from "react";
import createApp from "@shopify/app-bridge";
import { ResourcePicker } from "@shopify/app-bridge/actions";
import { Provider } from "@shopify/app-bridge-react";
import ButtonGroupDefaultExample from "./SizeChart";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
const host =
  typeof window !== "undefined"
    ? new URLSearchParams(window.location.search).get("host")
    : null;

console.log("checking" + host);

function App() {
  const config = {
    apiKey: "b7d5903573bf4a15bbc1fe1a76d1ae8c",
    host: host === null ? "Z2lmdGluZzQubXlzaG9waWZ5LmNvbS9hZG1pbg" : host,
    forceRedirect: true,
  };
  useEffect(() => {
    const app = createApp(config);
    const picker = ResourcePicker.create(app, {
      resourceType: ResourcePicker.ResourceType.Product,
    });

    picker.subscribe(ResourcePicker.Action.SELECT, (payload) => {
      console.log(payload.selection);
    });

    // Open the Resource Picker when the component mounts
    picker.dispatch(ResourcePicker.Action.OPEN);

    // Cleanup the picker when the component unmounts
    return () => picker.unsubscribe();
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <AppProvider>
      <Provider config={config}>
        <ButtonGroupDefaultExample />
      </Provider>
    </AppProvider>
  );
}

export default App;
