import { Variants} from "framer-motion";

// Animation variant for the arrow
const arrowVariant: Variants = {
  static: {
    x: "0px", // Initial position of the arrow
  },
  animate: {
    x: "10px", // Target position of the arrow
    transition: {
      yoyo: true, // Animation plays in reverse after completing
      repeat: Infinity, // Animation repeats indefinitely
      delay: 0, // Delay before starting the animation
      duration: 0.7, // Duration of the animation
    },
  },
};

// Animation variant for the arrow
const IncomingVariant: Variants = {
  static: {
    opacity: 0.2, // Initial position of the arrow
  },
  animate: {
    opacity: 1, // Initial position of the arrow
    transition: {
      yoyo: true, // Animation plays in reverse after completing
      repeat: Infinity, // Animation repeats indefinitely
      delay: 0, // Delay before starting the animation
      duration: 1, // Duration of the animation
    },
  },
};


// Animation variant for the arrow
const arrowVariantLeft: Variants = {
  static: {
    x: "0px", // Initial position of the arrow
  },
  animate: {
    x: "-10px", // Target position of the arrow
    transition: {
      yoyo: true, // Animation plays in reverse after completing
      repeat: Infinity, // Animation repeats indefinitely
      delay: 0, // Delay before starting the animation
      duration: 0.7, // Duration of the animation
    },
  },
};


// Animation variant for the info element
const infoVariant: Variants = {
  static: {
    opacity: 0, // Initial opacity of the info element
  },
  animate: {
    opacity: 1, // Target opacity of the info element
    transition: {
      delay: 4, // Delay before starting the animation
      duration: 0.5, // Duration of the animation
    },
  },
};

// Animation variant for the header
const headerVariant: Variants = {
  static: {
    y: "50%", // Initial position of the header
  },
  animate: {
    y: "0", // Target position of the header
    transition: {
      delay: 3.5, // Delay before starting the animation
      duration: 0.5, // Duration of the animation
    },
  },
};

const backdropVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const containerVariants: Variants = {
  hidden: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const modalPageVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export {
  arrowVariant,
  arrowVariantLeft,
  infoVariant,
  headerVariant,
  backdropVariants,
  containerVariants,
  modalPageVariant,
  IncomingVariant
};
