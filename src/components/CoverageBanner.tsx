import { MapPin, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function CoverageBanner() {
  const { t } = useLanguage();

  return (
    <section className="py-10 md:py-14 bg-gradient-to-r from-teal/15 via-gold/10 to-teal/15 border-y-2 border-gold/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/90 shadow-lg border border-teal/20 min-w-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-teal" />
              </div>
              <p className="text-base sm:text-lg font-semibold text-gray-dark min-w-0 break-words">
                {t('coverage.servicesLine')}
              </p>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/90 shadow-lg border border-gold/20 min-w-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
              </div>
              <p className="text-base sm:text-lg font-semibold text-gray-dark min-w-0 break-words">
                {t('coverage.formationsLine')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
