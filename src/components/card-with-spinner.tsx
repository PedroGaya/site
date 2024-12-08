import { useState } from "react";
import { Image } from "@nextui-org/image";
import { Card, CardFooter } from "@nextui-org/card";

export function CardWithSpinner({ ...props }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Card className={`${props.className} relative`}>
      {/* Spinner */}
      {!isImageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-200">
          <div className="loader"></div> {/* Replace with your spinner */}
        </div>
      )}

      {/* Image */}
      <Image
        removeWrapper
        alt={props.alt}
        className={`z-0 w-full h-full object-cover transition-opacity duration-300 ${
          isImageLoaded ? "opacity-100" : "opacity-0"
        }`}
        src={props.src}
        onLoad={() => setIsImageLoaded(true)}
      />

      {/* Footer */}
      <CardFooter className="absolute bg-neutral-400/80 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny font-bold">{props.description}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
