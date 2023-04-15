import { useState } from "react";

export function useMenuHandler(initialValue=false) {

    const [isOpen, setIsOpen] = useState(initialValue);

    function openMenuHandler(event) {

        event.preventDefault();
        setIsOpen((prev) => {
          return !prev
        });
        console.log(isOpen);
      
      };

      return [isOpen, setIsOpen, openMenuHandler];

}


