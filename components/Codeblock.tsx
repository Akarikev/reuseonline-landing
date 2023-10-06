
import React from "react";
const Codeblock = ({ code }: any) => {
    return (
      <div className="text-left">
        <pre>
          <code>{code}</code>
        </pre>
        
      </div>
    );
  };
  
  export default Codeblock;