"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiUser } from "react-icons/bi";
import { CgEditExposure } from "react-icons/cg";

export function UpdateModalForm() {
  const onSubmit = async(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.photo.value;
    console.log(name, image, "from edit profile pages");
    await authClient.updateUser({
    image: image,
    name: name,
})
  };
  return (
    <Modal>
      <Button variant="secondary">
        <CgEditExposure /> Edit profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                <BiUser size={50} />
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField className="w-full" name="photo" type="url">
                    <Label>Photo</Label>
                    <Input placeholder="Enter your Photo url" />
                  </TextField>
                  <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit"   >Save </Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
