import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X, ZoomIn, ZoomOut, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageViewerProps {
  src: string;
  alt: string;
  className?: string;
  children: React.ReactNode;
}

export const ImageViewer = ({ src, alt, className, children }: ImageViewerProps) => {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleZoomIn = () => setZoom(prev => Math.min(prev * 1.5, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev / 1.5, 0.5));
  const handleRotate = () => setRotation(prev => (prev + 90) % 360);
  
  const resetView = () => {
    setZoom(1);
    setRotation(0);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      resetView();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild className={className}>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-black/90 border-0">
        {/* Controls */}
        <div className="absolute top-4 right-4 z-50 flex items-center space-x-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleZoomOut}
            className="bg-white/90 hover:bg-white text-black"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleZoomIn}
            className="bg-white/90 hover:bg-white text-black"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleRotate}
            className="bg-white/90 hover:bg-white text-black"
          >
            <RotateCw className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="bg-white/90 hover:bg-white text-black"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Image Container */}
        <div className="w-full h-full flex items-center justify-center p-4">
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain transition-transform duration-300 cursor-grab active:cursor-grabbing"
            style={{
              transform: `scale(${zoom}) rotate(${rotation}deg)`,
              transformOrigin: 'center'
            }}
            draggable={false}
            onDoubleClick={() => zoom === 1 ? handleZoomIn() : setZoom(1)}
          />
        </div>

        {/* Info Bar */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 text-black px-3 py-1 rounded-full text-sm">
          {Math.round(zoom * 100)}% | {alt}
        </div>
      </DialogContent>
    </Dialog>
  );
};