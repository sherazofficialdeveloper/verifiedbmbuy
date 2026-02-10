import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=8801302669333&text=Hello%2C%20I%20want%20to%20purchase%3A%0D%0A%0D%0A%2A${encodeURIComponent(product.name)}%2A%0A%2APrice%3A%2A%20${product.price.toFixed(2)}%24%0A%2AURL%3A%2A%20https%3A%2F%2Fverifiedbmbuy.com%2F${product.slug}%2F%0D%0A%0D%0AThank%20you%21&app_absent=0`;

  return (
    <div className="group bg-white flex flex-col h-full border border-slate-100 rounded-[2rem] overflow-hidden product-card-shadow transition-all duration-500 hover:-translate-y-2 p-3">
      {/* Product Image Area with Side Space */}
      <div className="relative aspect-square bg-slate-50 rounded-[1.5rem] overflow-hidden p-6 flex items-center justify-center">
        <a href={`https://verifiedbmbuy.com/${product.slug}/`} className="block w-full h-full relative">
          <img 
            src={product.image} 
            alt={product.name}
            className={`w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 ${product.hoverImage ? 'group-hover:opacity-0' : ''}`}
            loading="lazy"
          />
          {product.hoverImage && (
            <img 
              src={product.hoverImage} 
              alt={product.name}
              className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
              loading="lazy"
            />
          )}
          {/* Subtle Theme Overlay */}
          <div className="absolute inset-0 bg-[#4788f7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        </a>

        {/* Labels - Modern Minimalist */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {product.saleLabel && (
            <span className="bg-[#4788f7] text-white text-[9px] font-black px-3 py-1 uppercase rounded-lg shadow-sm tracking-widest">
              {product.saleLabel}
            </span>
          )}
          {product.soldOut && (
            <span className="bg-slate-800 text-white text-[9px] font-black px-3 py-1 uppercase rounded-lg shadow-sm tracking-widest">
              Sold out
            </span>
          )}
        </div>
      </div>

      {/* Card Body - Roboto Font Family */}
      <div className="p-6 flex flex-col flex-grow font-['Roboto',sans-serif]">
        {/* Category Line */}
        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-3">
          {product.categories[0]}
        </div>

        {/* Product Title */}
        <h3 className="text-[16px] font-black text-[#1a202c] mb-4 leading-tight group-hover:text-[#4788f7] transition-colors line-clamp-2 min-h-[42px] tracking-tight">
          <a href={`https://verifiedbmbuy.com/${product.slug}/`}>{product.name}</a>
        </h3>

        {/* Rating and Price Row */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            {product.oldPrice && (
              <span className="text-[13px] text-slate-300 line-through font-medium">${product.oldPrice.toFixed(2)}</span>
            )}
            <span className="text-[20px] font-black text-[#1a202c]">
              {product.priceRange ? product.priceRange : `$${product.price.toFixed(2)}`}
            </span>
          </div>
          <div className="flex text-amber-400 gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-3 h-3 ${i < product.rating ? 'fill-current' : 'text-slate-100'}`} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-8 flex-grow">
          <div 
            className="text-[13px] text-slate-500 leading-relaxed line-clamp-3 font-normal"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#25d366] hover:bg-[#128c7e] text-white py-4 rounded-2xl text-[12px] font-black uppercase tracking-widest text-center transition-all duration-300 shadow-lg shadow-green-100 hover:shadow-green-200 active:scale-95"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Buy On WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;