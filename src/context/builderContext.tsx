import { ReactNode, createContext, useState } from "react";

const defaultSelectedComponents = {
  "CPU / Processor": null,
  Motherboard: null,
  RAM: null,
  "Power Supply Unit": null,
  "Storage Device": null,
  Monitor: null,
};

const BuilderContext = createContext();

const BuilderContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedComponents, setSelectedComponents] = useState(
    defaultSelectedComponents
  );

  const addComponentToBuilder = (category: string, component: string) => {
    setSelectedComponents({
      ...selectedComponents,
      [category]: component,
    });
  };

  return (
    <BuilderContext.Provider
      value={{ selectedComponents, addComponentToBuilder }}
    >
      {children}
    </BuilderContext.Provider>
  );
};

export { BuilderContext, BuilderContextProvider };
