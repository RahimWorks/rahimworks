import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Import the updated images
import handiqueHomepage from "/lovable-uploads/fcae573d-c0fb-4532-93bf-ce80325705d6.png";
import handiqueCategories from "/lovable-uploads/c0df9241-4b1d-4ff5-8234-ca5ba247e0be.png";
import handiqueProducts from "/lovable-uploads/6c85703a-85bc-40c1-a589-6e80ad626958.png";
import handiqueCart from "/lovable-uploads/a2e24750-ca42-46db-abde-440fa78d30e0.png";
import handiqueLogin from "/lovable-uploads/cdb11d43-0db6-46c8-8c68-1b0f47b0f8e5.png";
import handiqueRegister from "/lovable-uploads/67783395-80b7-4cae-9972-72d43927d7c1.png";

interface DemoGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoGallery = ({ isOpen, onClose }: DemoGalleryProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    {
      id: 1,
      image: handiqueHomepage,
      title: "Homepage",
      description: "Main landing page showcasing HandiQue's unique handcrafted treasures"
    },
    {
      id: 2,
      image: handiqueCategories,
      title: "Categories",
      description: "Browse by category - Jewelry, Home Decor, and Art collections"
    },
    {
      id: 3,
      image: handiqueProducts,
      title: "Product Listing",
      description: "Featured products including Tea Cup Wire Wall Hanging, Turtle Plant Pot, and Bow Earring"
    },
    {
      id: 4,
      image: handiqueCart,
      title: "Shopping Cart",
      description: "Complete shopping cart functionality with item management and checkout"
    },
    {
      id: 5,
      image: handiqueLogin,
      title: "User Login",
      description: "Secure user authentication with clean, modern interface"
    },
    {
      id: 6,
      image: handiqueRegister,
      title: "Registration",
      description: "User-friendly registration process for new HandiQue customers"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] w-fit h-fit p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4 items-center">
            <Button
              variant="secondary"
              size="sm"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <span className="text-sm text-portfolio-muted">
              {currentSlide + 1} of {screenshots.length}
            </span>
            
            <Button
              variant="secondary"
              size="sm"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center">
          <img
            src={screenshots[currentSlide].image}
            alt={screenshots[currentSlide].title}
            className="max-w-[80vw] max-h-[70vh] object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoGallery;