import React, { useState } from 'react';
import { MapPin, Phone, Mail, Navigation, ExternalLink, Clock, Car, Accessibility, MessageSquare, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';

export const LocationSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Cha'ah Restobar CT Montalban Street Villa Kananga Butuan City")}`;

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#0b100d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#d6b059] mb-3">
            Find Us in Butuan City
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Location & Contact Details
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Conveniently situated along CT Montalban Street in Villa Kananga. Ample parking space and accessible dining for your family and guests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact & Landmark Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-[#121c15] border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                      Physical Address
                    </h3>
                    <p className="text-sm text-zinc-300 mt-1 leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                    <div className="mt-2 text-xs text-[#dcb35c] font-medium flex items-center gap-1.5">
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Landmarks: In front of Alicia's Guest House · Near Camella Homes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="p-6 rounded-2xl bg-[#121c15] border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                      Direct Inquiries & Call
                    </h3>
                    <p className="text-lg font-mono font-bold text-white mt-1">
                      {BUSINESS_INFO.phone}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <a
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 hover:bg-emerald-800/60 transition-colors"
                      >
                        Call Now
                      </a>
                      <button
                        onClick={copyPhoneNumber}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 text-zinc-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1"
                      >
                        {copiedPhone ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <span>Copy Number</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email & Facebook Messenger */}
              <div className="p-6 rounded-2xl bg-[#121c15] border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-400/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                      Email & Social Messages
                    </h3>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-xs sm:text-sm text-zinc-300 hover:text-white underline block mt-1"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <a
                        href={BUSINESS_INFO.social.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-900/40 text-blue-300 border border-blue-700/50 hover:bg-blue-800/50 transition-colors flex items-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Facebook</span>
                      </a>
                      <a
                        href={BUSINESS_INFO.social.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-pink-900/40 text-pink-300 border border-pink-700/50 hover:bg-pink-800/50 transition-colors flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Instagram</span>
                      </a>
                      <a
                        href={BUSINESS_INFO.social.tiktok}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-950/50 text-cyan-300 border border-cyan-700/50 hover:bg-cyan-900/50 transition-colors flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>TikTok</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities Badges */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-around text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Car className="w-4 h-4 text-emerald-400" />
                <span>Dedicated Parking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Accessibility className="w-4 h-4 text-emerald-400" />
                <span>Accessible Entrance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Walk-Ins Welcome</span>
              </div>
            </div>
          </div>

          {/* Right: Map Showcase Card */}
          <div className="lg:col-span-7 rounded-3xl bg-[#121d15] border border-white/10 overflow-hidden flex flex-col shadow-2xl relative">
            <div className="p-6 bg-[#16241b] border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-amber-300">
                  Interactive Route Map
                </span>
                <h3 className="text-base font-bold text-white mt-0.5">
                  CT Montalban St, Villa Kananga
                </h3>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-300 to-amber-500 hover:brightness-110 transition-all flex items-center gap-1.5 shadow-md"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Map Canvas / Visual Card */}
            <div className="relative flex-1 min-h-[380px] bg-[#142017] p-6 flex flex-col justify-between">
              {/* Subtle map grid styling */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:20px_20px]" />

              <div className="relative z-10 flex flex-col gap-3">
                <div className="p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 max-w-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <MapPin className="w-4 h-4" />
                    <span>Cha'ah Restobar & Luminarium Events</span>
                  </div>
                  <p className="text-xs text-zinc-300 mt-1">
                    Directly opposite Alicia's Guest House on CT Montalban St. Quick access from J.C. Aquino Ave and Montilla Blvd.
                  </p>
                </div>
              </div>

              {/* Map Center Graphic Marker */}
              <div className="relative z-10 flex flex-col items-center justify-center my-6">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-amber-400/20 border border-amber-400 flex items-center justify-center text-amber-300 animate-pulse">
                    <MapPin className="w-8 h-8 fill-amber-400 text-black" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div className="mt-3 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                  Cha'ah Restobar · Brgy. Villa Kananga, Butuan City
                </div>
              </div>

              {/* Directions quick trigger */}
              <div className="relative z-10 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-zinc-300 text-center sm:text-left">
                  <span>Coordinates: 8.9482° N, 125.5342° E · Agusan del Norte</span>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-amber-300 hover:text-amber-200 underline flex items-center gap-1"
                >
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
