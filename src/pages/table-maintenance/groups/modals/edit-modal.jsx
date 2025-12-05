import React, { useState } from "react";
import Form from "@components/forms/form";
import Modal from "@components/modals/modal";
import SelectInput from "@components/selections/selectioninput";
import TextInput from "@components/textinputs/textinput";

export default function EditModal({ isOpen, onClose }) {
  const [data, setData] = useState({ level: "" });
  return (
    <Modal title={"Group Edit Modal"} isOpen={isOpen} onClose={onClose}>
      <Form
        borderLess
        onSubmit={() => {}}
        onCancel={onClose}
        className={"grid gap-4"}
      >
        <TextInput
          id={"group-reg-desc"}
          name={"groupDesc"}
          label={"Description"}
          placeholder={"Desription"}
          required
        />
        <SelectInput
          id={"group-reg-level"}
          name={"groupLevel"}
          label={"Level"}
          placeholder={"Select Level"}
          value={data?.level}
          onChange={(e) => setData({ ...data, level: e.target.value })}
          options={[
            { value: "1", label: "Branch" },
            { value: "2", label: "Area" },
            { value: "3", label: "Region" },
            { value: "4", label: "Group" },
          ]}
          required
        />
      </Form>
    </Modal>
  );
}
