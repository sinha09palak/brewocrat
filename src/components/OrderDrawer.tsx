import React from 'react';
import { X, Trash2, Plus, Minus, MessageSquare, Calendar, Beer } from 'lucide-react';
import { MenuItem, RESTAURANT_INFO } from '../data/restaurantData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onClearCart: () => void;
  onProceedToReservation: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onClearCart,
  onProceedToReservation
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);

  const handleWhatsAppOrder = () => {
    let orderText = `Hello Brewocrat! I would like to place an order / inquire for my table:\n\n`;
    items.forEach((ci) => {
      orderText += `• ${ci.item.name} x${ci.quantity} - ₹${ci.item.price * ci.quantity}\n`;
    });
    orderText += `\nSubtotal: ₹${subtotal}\nLocation: 2nd Floor, Element One Mall, Gurugram.`;

    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(orderText)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#101118] border-l border-amber-500/25 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400">
                Brewocrat Table Order Tray
              </span>
              <h3 className="font-display text-lg font-bold text-white mt-0.5">
                Your Selected Items ({items.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
              aria-label="Close tray"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 text-neutral-400 space-y-3">
                <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto text-neutral-500">
                  <Beer className="w-6 h-6" />
                </div>
                <p className="text-sm">Your order tray is currently empty.</p>
                <p className="text-xs text-neutral-500">
                  Explore our craft beer taps and gourmet kitchen items to add to your order.
                </p>
              </div>
            ) : (
              items.map(({ item, quantity }) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 flex items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.isVeg ? 'bg-emerald-400' : 'bg-rose-500'
                        }`}
                      />
                      <h4 className="font-display text-xs sm:text-sm font-bold text-white truncate">
                        {item.name}
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-amber-400 block mt-1">
                      ₹{item.price * quantity}
                    </span>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 bg-neutral-950 px-2 py-1 rounded-lg border border-neutral-800">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="p-1 text-neutral-400 hover:text-white"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-mono text-white font-bold w-4 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="p-1 text-neutral-400 hover:text-white"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Actions */}
          {items.length > 0 && (
            <div className="p-6 border-t border-neutral-800 bg-[#0c0d14] space-y-4">
              <div className="flex justify-between items-center text-sm font-mono">
                <span className="text-neutral-400">Estimated Subtotal:</span>
                <span className="text-xl font-bold font-display text-amber-400">
                  ₹{subtotal}
                </span>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    onClose();
                    onProceedToReservation();
                  }}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-display text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Table With Pre-Order</span>
                </button>

                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-display text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire / Send on WhatsApp</span>
                </button>

                <button
                  onClick={onClearCart}
                  className="w-full text-center text-[11px] font-mono text-neutral-500 hover:text-rose-400 pt-1"
                >
                  Clear Order Tray
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
