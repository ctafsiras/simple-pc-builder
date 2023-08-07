import {
  BuilderContextType,
  IDefaultSelectedComponents,
  IProduct,
} from "@/interface/product";
import { ReactNode, createContext, useState } from "react";

const defaultSelectedComponents: IDefaultSelectedComponents|null = {
  "CPU / Processor": null,
  Motherboard: null,
  RAM: null,
  "Power Supply Unit": null,
  "Storage Device": null,
  Monitor: null,
};

const BuilderContext = createContext<BuilderContextType>(undefined!);

const BuilderContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedComponents, setSelectedComponents] = useState(
    defaultSelectedComponents
  );

  const addComponentToBuilder = (
    category: string,
    component: IProduct | null
  ) => {
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
