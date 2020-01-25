import React, { useState } from "react";

import Settings from "./Settings";

import {
  Textarea,
  Box,
  Button,
  Flex,
  IconButton,
  useDisclosure
} from "@chakra-ui/core";

function Widget() {
  const [buttonText, setButtonText] = useState("Save Bookmark");
  const [pageTitle, setPageTitle] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(onOpen);

  return (
    <>
      <Settings isOpen={isOpen} onClose={onClose} />
      <Box
        w={280}
        borderWidth="1px"
        rounded="md"
        p="3"
        pos="fixed"
        right="3"
        bottom="3"
        boxShadow="md"
      >
        <Textarea
          placeholder="Title"
          resize="none"
          variant="unstyled"
          height="auto"
          minH={2}
          onInput={e => handleResize(e)}
          pt={0}
          fontWeight="600"
          textDecoration="underline"
        />
        <Flex justify="space-between">
          <Button variantColor="blue" size="sm" loadingText="Saving">
            {buttonText}
          </Button>
          <Flex>
            <IconButton
              icon="settings"
              variant="ghost"
              variantColor="gray"
              size="sm"
              onClick={onOpen}
            ></IconButton>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

function handleResize(e) {
  const textarea = e.target;
  textarea.style.height = "";
  textarea.style.height = textarea.scrollHeight + "px";
  console.log(
    "TCL: handleResize -> textarea.scrollHeight",
    textarea.scrollHeight
  );
}

export default Widget;
