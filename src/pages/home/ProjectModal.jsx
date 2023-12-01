import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import avatar from "../../assets/homePage/modalavater.png"
import { ThemeProvider } from "@material-tailwind/react";
import { dialogTheme } from "./dialogStyle";
import closeBtn from "../../assets/homePage/Component 43.png"
 
export function ProjectModal({open,setOpen}) {
  const [isFavorite, setIsFavorite] = React.useState(false);
 
  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);
  const newTheme = JSON.parse(JSON.stringify(dialogTheme));
  newTheme.dialog.styles.base.backdrop.backgroundOpacity = "bg-opacity-80"
 
  return (
    <>
     <ThemeProvider value={newTheme}>
       <Dialog size="xl" open={open} handler={handleOpen} className="bg-black/50 md:px-16 ">
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <Avatar
              size="md"
              variant="circular"
              alt="tania andrew"
              src={avatar}
            />
            <div className="-mt-px flex flex-col">
              <Typography
                variant="h3"
                color="blue-gray"
                className="font-bold text-white"
              >
                Tania Andrew
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-lg font-normal text-white"
              >
                @emmaroberts
              </Typography>
            </div>
          </div>
          <div>
              <img src={closeBtn} alt="" className="w-[3rem]" onClick={handleOpen}/>
          </div>
        </DialogHeader>
        <DialogBody className="h-[50vh] md:h-[70vh]">
          <img
            alt="nature"
            className="h-full w-full rounded-lg object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          />
        </DialogBody>
        <DialogFooter className="justify-between">
          <div className="flex items-center gap-16">
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Views
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                44,082,044
              </Typography>
            </div>
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Downloads
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                553,031
              </Typography>
            </div>
          </div>
          <Button
            size="sm"
            variant="outlined"
            color="blue-gray"
            className="mr-5 flex items-center"
          >
            Share
          </Button>
        </DialogFooter>
      </Dialog>
      </ThemeProvider>
    </>
  );
}