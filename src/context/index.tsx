import React from "react";

interface ContextType {
  width: number;
}

const defaultValue: ContextType = {
  width: 0,
};

const Context = React.createContext<ContextType>(defaultValue);

export default Context;
