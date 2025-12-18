
import React from 'react';
import { NavLink } from '../types';
import { Trash2, ExternalLink, Pencil, Heart } from 'lucide-react';
import { playSfx } from '../utils/audio';
import { PIXEL_ICONS } from '../constants';

interface DoodleCardProps {
  link: NavLink;
  onDelete: (id: string) => void;
  onEdit: (link: NavLink) => void;
  onToggleFavorite: (id: string) => void;
  index: number;
  isHovered: boolean;
  isDimmed: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void;
  isDragging?: boolean;
  onJump?: (link: NavLink) => void;
}

const DoodleCard: React.FC<DoodleCardProps> = ({ 
  link, 
  onDelete, 
  onEdit,
  onToggleFavorite,
  index,
  isHovered,
  isDimmed,
  onMouseEnter,
  onMouseLeave,
  draggable,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
  isDragging,
  onJump
}) => {
  
  const handleCardClick = () => {
    playSfx('click');
    if (onJump) {
        onJump(link);
    } else {
        window.open(link.url, '_blank');
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSfx('pop');
    onToggleFavorite(link.id);
  };

  // Safe hostname extraction
  let hostname = 'LINK';
  try {
    if (link.url.startsWith('#')) {
      hostname = 'SYSTEM';
    } else {
      const urlObj = new URL(link.url.startsWith('http') ? link.url : `https://${link.url}`);
      hostname = urlObj.hostname.replace('www.', '');
    }
  } catch (e) {
    hostname = 'LINK';
  }

  const categoryPixelIcon = PIXEL_ICONS[link.category] || PIXEL_ICONS.ALL;

  const renderIcon = () => {
    if (link.icon && link.icon.trim().startsWith('<svg')) {
      return (
        <div 
          className="w-full h-full flex items-center justify-center p-1" 
          style={{ imageRendering: 'pixelated' }}
          dangerouslySetInnerHTML={{ __html: link.icon }} 
        />
      );
    }
    
    if (link.icon && link.icon.length <= 4) {
      return (
        <span 
          className="text-3xl select-none"
          style={{ 
            textShadow: '2px 2px 0px #000',
            imageRendering: 'pixelated'
          }}
        >
          {link.icon}
        </span>
      );
    }

    return (
      <div 
        className="w-full h-full flex items-center justify-center p-1" 
        style={{ imageRendering: 'pixelated' }}
        dangerouslySetInnerHTML={{ __html: categoryPixelIcon }} 
      />
    );
  };

  return (
    <div 
      onClick={handleCardClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
      className={`
        relative group p-4
        transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)
        border-[3px] border-black rounded-lg
        flex flex-col h-[200px] w-full
        overflow-hidden select-none
        
        bg-transparent shadow-[4px_4px_0px_#000] transform scale-100 rotate-0

        hover:-translate-y-2
        hover:scale-[1.03]
        hover:shadow-[10px_10px_0px_#00E5FF]
        hover:border-black hover:rotate-1
        hover:z-10
        hover:bg-white/10

        ${isDragging ? 'opacity-30 border-dashed scale-95' : 'opacity-100'}
        ${isDimmed && !isDragging ? 'opacity-40 grayscale' : ''}
      `}
      style={{ 
        cursor: draggable ? (isDragging ? 'grabbing' : 'grab') : 'pointer'
      }}
    >
      <div className="absolute top-0 right-4 transform -translate-y-1/2 flex items-center z-20">
         {link.isFavorite && (
            <div className="bg-jinx-pink text-white p-1.5 border-2 border-black shadow-[2px_2px_0_#000] flex items-center justify-center animate-pop">
               <Heart size={12} fill="currentColor" />
            </div>
         )}
         <div className="w-4 h-4 bg-black border-2 border-black ml-[-2px] shadow-[2px_2px_0_#FF003C]"></div>
      </div>

      <div className={`
        absolute -bottom-4 -right-2 text-8xl font-black pointer-events-none select-none z-0 tracking-tighter italic
        transition-all duration-300
        text-stroke-1 opacity-5 group-hover:opacity-10 group-hover:scale-110 group-hover:text-jinx-blue group-hover:translate-x-2
      `}>
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="absolute top-0 left-0 w-8 h-8 border-t-[6px] border-l-[6px] border-jinx-blue rounded-tl-md z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="relative z-10 flex justify-start mb-4 mt-2 pl-2">
        <div className={`
          w-14 h-14 flex items-center justify-center
          ${link.color} text-black border-[3px] border-black
          shadow-[3px_3px_0px_#000] rounded-sm
          transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[5px_5px_0_#000]
        `} 
        style={{ imageRendering: 'pixelated' }}
        >
          {renderIcon()}
        </div>
      </div>
      
      <div className="relative z-10 flex-1 flex flex-col pl-2">
        <h3 className="font-anime text-2xl font-black text-black leading-none line-clamp-2 mb-2 text-left transform group-hover:translate-x-1 transition-transform">
          {link.title}
        </h3>
        
        <div className="flex items-center gap-2 text-gray-800 text-[10px] font-mono mt-auto px-1 py-0.5 self-start border border-transparent transition-colors bg-white/30 rounded backdrop-blur-[1px]">
            <ExternalLink size={10} className="group-hover:text-purple-500 transition-colors" /> 
            <span className="truncate max-w-[120px] group-hover:text-purple-500 transition-colors font-bold uppercase tracking-tighter">{hostname}</span>
        </div>
      </div>

      <div className={`
          absolute top-10 right-2 flex flex-col gap-2 z-30 transition-all duration-200
          ${isHovered && !isDragging ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0 pointer-events-none'}
      `}>
          <button 
              onClick={handleFavoriteClick}
              className={`p-2 border-2 border-black shadow-[2px_2px_0_#000] active:translate-y-0.5 active:shadow-none transition-all ${link.isFavorite ? 'bg-jinx-pink text-white' : 'bg-white/80 text-black hover:bg-jinx-pink hover:text-white'}`}
              title={link.isFavorite ? "Unfavorite" : "Favorite"}
          >
              <Heart size={16} fill={link.isFavorite ? 'currentColor' : 'none'} strokeWidth={3} />
          </button>
          <button 
              onClick={(e) => { e.stopPropagation(); onEdit(link); }}
              className="p-2 bg-white/80 border-2 border-black hover:bg-black hover:text-white text-black shadow-[2px_2px_0_#000] active:translate-y-0.5 active:shadow-none transition-all"
              title="Edit"
          >
              <Pencil size={16} strokeWidth={3} />
          </button>
          <button 
              onClick={(e) => { e.stopPropagation(); onDelete(link.id); }}
              className="p-2 bg-white/80 border-2 border-black hover:bg-red-500 hover:text-white text-black shadow-[2px_2px_0_#000] active:translate-y-0.5 active:shadow-none transition-all"
              title="Delete"
          >
              <Trash2 size={16} strokeWidth={3} />
          </button>
      </div>
    </div>
  );
};

export default DoodleCard;
