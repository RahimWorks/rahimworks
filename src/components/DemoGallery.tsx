import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Import the new images
import handiqueHomepage from "@/assets/handique-homepage.png";
import handiqueCategories from "@/assets/handique-categories.png";
import handiqueProducts from "@/assets/handique-products.png";
import handiqueCart from "@/assets/handique-cart.png";
import handiqueLogin from "@/assets/handique-login.png";
import handiqueRegister from "@/assets/handique-register.png";

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
      <DialogContent className="max-w-6xl w-full h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-primary">
                HandiQue Live Demo - {screenshots[currentSlide].title}
              </DialogTitle>
              <DialogDescription className="text-portfolio-muted mt-1">
                Interactive showcase of the HandiQue e-commerce platform features
              </DialogDescription>
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
        </DialogHeader>

        <div className="flex-1 relative overflow-hidden">
          {/* Main Image Display */}
          <div className="relative h-full flex items-center justify-center bg-gray-50">
            <img
              src={screenshots[currentSlide].image}
              alt={screenshots[currentSlide].title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
            />
            
            {/* Navigation Arrows */}
            <Button
              variant="secondary"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="secondary"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Bottom Section with Description and Thumbnails */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4">
            <div className="text-center mb-4">
              <h3 className="font-semibold text-lg text-primary mb-2">
                {screenshots[currentSlide].title}
              </h3>
              <p className="text-portfolio-muted text-sm max-w-2xl mx-auto">
                {screenshots[currentSlide].description}
              </p>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-2 overflow-x-auto pb-2">
              {screenshots.map((screenshot, index) => (
                <button
                  key={screenshot.id}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                    currentSlide === index 
                      ? 'border-primary shadow-md' 
                      : 'border-gray-300 hover:border-primary/50'
                  }`}
                >
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-2">
              <span className="text-sm text-portfolio-muted">
                {currentSlide + 1} of {screenshots.length}
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoGallery;