export const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Schedule class",
      href: "/schedule",
      submenu: [
        { name: "Classes Booking", href: "/normalclass" },
        // { name: "Private class", href: "/privateclass" },
        
      ],
    },
    {
      name: "Services",
      href: "/services",
      submenu: [
        { name: "Yoga Classes", href: "/yogaclass" },
        { name: "Pilates", href: "/pilates" },
        { name: "Kids yoga", href: "/kidsyoga" },
        { name: "Yoga Therapy", href: "/yogatherapy" },
        { name: "Sound Healing", href: "/soundhealing " },
        { name: "Training course", href: "/trainingcourse" },
      ],
    },
    {
      name: "About us",
      href: "/about",
      submenu: [
        { name: "Gallery", href: "#gallery" },
        { name: "Branch", href: "#gallery" },
        // { name: "AddDataForm", href: "/addDataForm" },
      ],
    },
    {
      name: "Product",
      href: "/product",
    },
  ];
  