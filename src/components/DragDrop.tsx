import React, { useRef, useState } from "react";

const DragDrop = () => {
  const dragItem = useRef<null | number>(null);
  const dragOverItem = useRef<null | number>(null);

  const dragEnter = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    dragOverItem.current = index; // 이게 예를 들어서 인덱스 6이면 ref = 6이 되는 거야
    console.log((e.target as HTMLElement).innerHTML);
  };

  const dragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    dragItem.current = index; // 이게 예를 들어서 인덱스 6이면 ref = 6이 되는 거야
    console.log((e.target as HTMLElement).innerHTML);
  };

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    const copyListItems = [...list]; // 1, 2, 3, 4, 5, 6
    const dragItemContent = copyListItems[dragItem.current as number]; // 2 선택 dragItemContent = 2
    copyListItems.splice(dragItem.current as number, 1); // 2를 삭제
    copyListItems.splice(dragOverItem.current as number, 0, dragItemContent); // 올라가 있는 곳에 2 추가
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  const [list, setList] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"]);
  return (
    <>
      {list &&
        list.map((item, index) => {
          return (
            <div
              style={{
                backgroundColor: "lightblue",
                margin: "20px 25%",
                textAlign: "center",
                fontSize: "40px",
              }}
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
              onDragOver={(e) => e.preventDefault()}
              key={index}
              draggable
            >
              {item}
            </div>
          );
        })}
    </>
  );
};

export default DragDrop;
