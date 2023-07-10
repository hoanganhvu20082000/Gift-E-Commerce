import React, { useEffect, useRef, useState } from "react";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { ColorPicker, InputRef } from "antd";
import { Space, Tag } from "antd";

const ListColorPicker = (props: any) => {
  const [tags, setTags] = useState(props.value || []);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  //   const [editInputIndex, setEditInputIndex] = useState(-1);
  //   const [editInputValue, setEditInputValue] = useState("");
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [inputValue]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag: any) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };

  //   const showInput = () => {
  //     setInputVisible(true);
  //   };

  const handleInputChange = (color: any) => {
    if (tags.indexOf(inputValue) === -1) {
      setTags([...tags, color.toHexString()]);
    }
    setInputVisible(false);
    setInputValue("");
  };

  //   const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setEditInputValue(e.target.value);
  //   };

  //   const handleEditInputConfirm = () => {
  //     const newTags = [...tags];
  //     newTags[editInputIndex] = editInputValue;
  //     setTags(newTags);
  //     setEditInputIndex(-1);
  //     setInputValue("");
  //   };

  //   const tagInputStyle: React.CSSProperties = {
  //     width: 78,
  //     verticalAlign: "top",
  //   };

  const tagPlusStyle: React.CSSProperties = {
    borderStyle: "dashed",
  };

  return (
    <Space size={[0, 8]} wrap>
      <Space size={[0, 8]} wrap>
        {tags.map((tag: any, index: any) => {
          const tagElem = (
            <Tag
              key={tag}
              closable={index !== 0}
              color={tag}
              onClose={() => handleClose(tag)}
              closeIcon={
                <CloseOutlined
                  style={{
                    display: "inline-grid",
                  }}
                />
              }
              style={tag === "white" ? { color: "black" } : undefined}
            >
              <span
                onDoubleClick={(e) => {
                  if (index !== 0) {
                    e.preventDefault();
                  }
                }}
              >
                {tag}
              </span>
            </Tag>
          );
          return tagElem;
        })}
      </Space>
      {inputVisible ? (
        <ColorPicker value={inputValue} onChange={handleInputChange} />
      ) : (
        <ColorPicker onChange={handleInputChange}>
          <Tag style={tagPlusStyle}>
            <PlusOutlined /> New Tag
          </Tag>
        </ColorPicker>
      )}
    </Space>
  );
};

export default ListColorPicker;
