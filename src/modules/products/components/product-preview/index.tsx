import clsx from "clsx";
import Link from "next/link";
import { ProductPreviewType } from "types/global";
import Thumbnail from "../thumbnail";


const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
  material,
}: ProductPreviewType) => {
  return (
    <Link href={`/products/${handle}`}>
      <div className="transition ease-in-out delay-50 hover:shadow-lg border rounded hover:bg-green-100">
       <div className='border-b'>
        <Thumbnail  thumbnail={thumbnail}  size="full" />
        </div>
        <div style={{ paddingLeft: "10px" }} className="text-base-regular mt-2">
          <div style={{display:'flex', flexDirection:'column'}}>
          <span className="text-xs text-slate-700">{material}</span>
          <span className="font-semibold">{title}</span>
          </div>
          <div className="flex items-center gap-x-2 mt-1">
            {price ? (
              <>
                {price.price_type === "sale" && (
                  <span className="line-through text-gray-500">
                    {price.original_price}
                  </span>
                )}
                <span
                  className={clsx("font-base", {
                    "text-rose-500": price.price_type === "sale",
                  })}
                >
                  {price.calculated_price}
                </span>
              </>
            ) : (
              <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductPreview;
