import React, { useRef } from "react";

import { SC, createSC } from "../../src/index";

const Box = createSC("div");

const App = () => {
  const refBox = useRef(null);
  console.log("refBox: ", refBox);
  const list = ["1", "2", "3"];
  return (
    <div>
      Demo
      <div>
        {list.map((item, index) => (
          <DemoItem key={index} boxNumber={item} />
        ))}
      </div>
      <SC.div
        ref={refBox}
        data-prop="tes"
        data-new={null}
        data-up={1}
        data-down={undefined}
        data-left={""}
        data-right=""
        color="blue"
        backgroundColor="red"
        bgColor="red"
        _hover={{ bgColor: "beige" }}
        _custom={{ condition: "&:hover", style: { bgColor: "darkblue" } }}
      >
        another
      </SC.div>
    </div>
  );
};

const DemoItem = ({ boxNumber }: { boxNumber: string }) => {
  return <Box bgColor="beige">Box #{boxNumber}</Box>;
};

export default App;
