import { X, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PrivacyPolicyModalProps {
    onClose: () => void;
}

export default function PrivacyPolicyModal({ onClose }: PrivacyPolicyModalProps) {
    const { i18n } = useTranslation();
    const isTr = i18n.language === 'tr';

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <div className="bg-deep-space/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-metal max-w-2xl w-full max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="sticky top-0 bg-deep-space/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between rounded-t-3xl z-10 shrink-0">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-metal-gradient rounded-full shadow-neon">
                            <Shield className="w-5 h-5 text-deep-space" />
                        </div>
                        <h2 className="text-xl font-bold text-chrome-white">
                            {isTr ? 'Gizlilik Politikası' : 'Privacy Policy'}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6 text-liquid-silver" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto text-liquid-silver text-sm space-y-6 leading-relaxed">
                    {/* TR Content */}
                    {isTr && (
                        <div className="space-y-4">
                            <p className="italic text-liquid-grey">Son Güncelleme: 26 Aralık 2025</p>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">1. Giriş</h3>
                                <p>
                                    Caoschef ("biz", "bizim" veya "uygulama"), kullanıcılarının ("siz" veya "kullanıcı") gizliliğini korumayı taahhüt eder.
                                    Bu Gizlilik Politikası, Caoschef mobil uygulamasını kullanırken kişisel verilerinizin nasıl toplandığını,
                                    kullanıldığını ve korunduğunu açıklar.
                                </p>
                                <div className="bg-neon-blue/10 border-l-4 border-neon-blue p-4 my-4 rounded-r">
                                    <strong className="text-neon-blue">Önemli:</strong> Caoschef, kullanıcı verilerini toplamak, depolamak veya paylaşmak amacıyla tasarlanmamıştır.
                                    Tüm veriler cihazınızda yerel olarak saklanır ve hiçbir sunucuya gönderilmez.
                                </div>
                            </section>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">2. Toplanan Bilgiler</h3>
                                <h4 className="text-chrome-white font-semibold mb-1">2.1. Kullanıcı Tarafından Sağlanan Bilgiler</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Malzeme Listeleri:</strong> Tarif önerileri almak için girdiğiniz malzemeler</li>
                                    <li><strong>Fotoğraflar:</strong> Buzdolabınızdan/deponuzdan çektiğiniz fotoğraflar (sadece malzeme tespiti için)</li>
                                    <li><strong>Mutfak Tercihleri:</strong> Seçtiğiniz mutfak türleri, porsiyon sayısı ve diyet tercihleri</li>
                                    <li><strong>API Anahtarı:</strong> Groq API servisini kullanmak için sağladığınız API anahtarı (opsiyonel)</li>
                                </ul>

                                <h4 className="text-chrome-white font-semibold mt-4 mb-2">2.2. Otomatik Olarak Toplanan Bilgiler</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Kullanım İstatistikleri:</strong> Ücretsiz kullanıcılar için tarif oluşturma sayacı (sadece cihazınızda)</li>
                                    <li><strong>Dil Tercihi:</strong> Seçtiğiniz uygulama dili</li>
                                    <li><strong>Yerel Ayarlar:</strong> Uygulama içi tercihleriniz ve ayarlarınız</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">3. Bilgilerin Kullanımı</h3>
                                <p>Topladığımız bilgiler yalnızca şu amaçlarla kullanılır:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Tarif Üretimi:</strong> Girdiğiniz malzemelere göre kişiselleştirilmiş tarif önerileri sunmak</li>
                                    <li><strong>Görüntü İşleme:</strong> Fotoğraflarınızdan malzemeleri tespit etmek için yapay zeka kullanmak</li>
                                    <li><strong>Kullanım Limiti:</strong> Ücretsiz kullanıcılar için günlük tarif limitini yönetmek</li>
                                    <li><strong>Uygulama İşlevselliği:</strong> Tercihlerinizi hatırlamak ve kullanıcı deneyimini iyileştirmek</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">4. Üçüncü Taraf Servisler</h3>
                                <h4 className="text-chrome-white font-semibold mb-1">4.1. Groq API</h4>
                                <p className="mb-2">
                                    Caoschef, yapay zeka destekli tarif önerileri ve görüntü işleme için <strong>Groq API</strong> kullanır.
                                    Bu servise gönderilen veriler:
                                </p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Girdiğiniz malzeme listesi</li>
                                    <li>Yüklediğiniz fotoğraflar (sadece işleme sırasında)</li>
                                    <li>Mutfak tercihleri ve diyet kısıtlamaları</li>
                                </ul>
                                <div className="bg-neon-blue/10 border-l-4 border-neon-blue p-4 my-4 rounded-r">
                                    <strong className="text-neon-blue">Önemli Bilgi:</strong> Groq API'ye gönderilen veriler yalnızca tarif oluşturma ve görüntü işleme için kullanılır.
                                </div>

                                <h4 className="text-chrome-white font-semibold mt-4 mb-2">4.2. Bing Image Search</h4>
                                <p>
                                    Tarif görselleri, Microsoft Bing Image Search API'si aracılığıyla dinamik olarak yüklenir.
                                    Bu işlem sırasında yalnızca tarif adı Bing'e gönderilir ve hiçbir kişisel bilgi paylaşılmaz.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">5. Veri Depolama</h3>
                                <h4 className="text-chrome-white font-semibold mb-1">5.1. Yerel Depolama</h4>
                                <p>Tüm kullanıcı verileri cihazınızda yerel olarak (LocalStorage) saklanır:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Groq API anahtarınız</li>
                                    <li>Dil tercihiniz</li>
                                    <li>Kullanım sayaçları</li>
                                    <li>Uygulama ayarları</li>
                                </ul>

                                <h4 className="text-chrome-white font-semibold mt-4 mb-2">5.2. Uzak Sunucular</h4>
                                <p>
                                    <strong>Caoschef kendi sunucusuna hiçbir veri göndermez veya saklamaz.</strong>
                                    Uygulama tamamen cihazınızda çalışır ve tüm veriler yerel olarak saklanır.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">6. Veri Güvenliği</h3>
                                <p>Verilerinizin güvenliğini sağlamak için şu önlemleri alırız:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Şifreli İletişim:</strong> Tüm API istekleri şifreli HTTPS bağlantısı üzerinden yapılır</li>
                                    <li><strong>Yerel Depolama:</strong> Veriler yalnızca cihazınızda saklanır ve başka hiçbir yere gönderilmez</li>
                                    <li><strong>API Güvenliği:</strong> API anahtarınız cihazınızda saklanır ve şifreli şekilde iletilir</li>
                                    <li><strong>Geçici İşleme:</strong> Fotoğraflar sadece işleme sırasında kullanılır ve saklanmaz</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">7. Kullanıcı Hakları (GDPR/KVKK)</h3>
                                <p>Kullanıcı olarak aşağıdaki haklara sahipsiniz:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Erişim Hakkı:</strong> Verilerinize erişim (uygulama ayarlarından görüntülenebilir)</li>
                                    <li><strong>Silme Hakkı:</strong> Tüm verilerinizi silebilirsiniz (uygulamayı kaldırarak veya ayarlardan sıfırlayarak)</li>
                                    <li><strong>Taşınabilirlik Hakkı:</strong> Verileriniz cihazınızda olduğu için size aittir</li>
                                    <li><strong>İtiraz Hakkı:</strong> Veri işleme faaliyetlerine itiraz edebilirsiniz</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">8. Çocukların Gizliliği</h3>
                                <p>
                                    Caoschef, 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamaz.
                                    Eğer 13 yaşından küçükseniz, uygulamayı kullanmadan önce ebeveyn veya vasinizin iznini almalısınız.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">9. Değişiklikler</h3>
                                <p>
                                    Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Değişiklikler bu sayfada yayınlanacak
                                    ve "Son Güncelleme" tarihi değiştirilecektir. Önemli değişiklikler için uygulama içi bildirim gönderilebilir.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">10. İletişim</h3>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                    <p className="mb-2">Bu Gizlilik Politikası hakkında sorularınız varsa, lütfen bizimle iletişime geçin:</p>
                                    <p><strong>Email:</strong> support@caoschef.com</p>
                                    <p><strong>Uygulama:</strong> Ayarlar &gt; Hakkında &gt; Destek</p>
                                </div>
                            </section>
                        </div>
                    )}

                    {/* EN Content */}
                    {!isTr && (
                        <div className="space-y-4">
                            <p className="italic text-liquid-grey">Last Updated: December 26, 2025</p>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">1. Introduction</h3>
                                <p>
                                    Caoschef ("we", "our" or "app") is committed to protecting the privacy of our users ("you" or "user").
                                    This Privacy Policy explains how we collect, use, and protect your personal data when you use the Caoschef mobile application.
                                </p>
                                <div className="bg-neon-blue/10 border-l-4 border-neon-blue p-4 my-4 rounded-r">
                                    <strong className="text-neon-blue">Important:</strong> Caoschef is not designed to collect, store, or share user data.
                                    All data is stored locally on your device and is never sent to any server.
                                </div>
                            </section>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">2. Information We Collect</h3>
                                <h4 className="text-chrome-white font-semibold mb-1">2.1. User-Provided Information</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Ingredient Lists:</strong> Ingredients you enter to receive recipe suggestions</li>
                                    <li><strong>Photos:</strong> Photos you take of your refrigerator/pantry (for ingredient detection only)</li>
                                    <li><strong>Cuisine Preferences:</strong> Your selected cuisine types, serving sizes, and dietary preferences</li>
                                    <li><strong>API Key:</strong> Your provided API key for using Groq API service (optional)</li>
                                </ul>

                                <h4 className="text-chrome-white font-semibold mt-4 mb-2">2.2. Automatically Collected Information</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Usage Statistics:</strong> Recipe generation counter for free users (only on your device)</li>
                                    <li><strong>Language Preference:</strong> Your selected app language</li>
                                    <li><strong>Local Settings:</strong> Your in-app preferences and settings</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">3. How We Use Information</h3>
                                <p>The information we collect is used solely for the following purposes:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Recipe Generation:</strong> To provide personalized recipe suggestions based on your ingredients</li>
                                    <li><strong>Image Processing:</strong> To use AI to detect ingredients from your photos</li>
                                    <li><strong>Usage Limit:</strong> To manage daily recipe limits for free users</li>
                                    <li><strong>App Functionality:</strong> To remember your preferences and improve user experience</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">4. Third-Party Services</h3>
                                <h4 className="text-chrome-white font-semibold mb-1">4.1. Groq API</h4>
                                <p className="mb-2">
                                    Caoschef uses <strong>Groq API</strong> for AI-powered recipe suggestions and image processing.
                                    Data sent to this service includes:
                                </p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Your ingredient list</li>
                                    <li>Photos you upload (only during processing)</li>
                                    <li>Cuisine preferences and dietary restrictions</li>
                                </ul>
                                <div className="bg-neon-blue/10 border-l-4 border-neon-blue p-4 my-4 rounded-r">
                                    <strong className="text-neon-blue">Important Information:</strong> Data sent to Groq API is used only for recipe generation and image processing.
                                </div>

                                <h4 className="text-chrome-white font-semibold mt-4 mb-2">4.2. Bing Image Search</h4>
                                <p>
                                    Recipe images are dynamically loaded through Microsoft Bing Image Search API.
                                    Only the recipe name is sent to Bing during this process, and no personal information is shared.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">5. Data Storage</h3>
                                <h4 className="text-chrome-white font-semibold mb-1">5.1. Local Storage</h4>
                                <p>All user data is stored locally on your device (LocalStorage):</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Your Groq API key</li>
                                    <li>Your language preference</li>
                                    <li>Usage counters</li>
                                    <li>App settings</li>
                                </ul>

                                <h4 className="text-chrome-white font-semibold mt-4 mb-2">5.2. Remote Servers</h4>
                                <p>
                                    <strong>Caoschef does not send or store any data on its own servers.</strong>
                                    The app runs entirely on your device, and all data is stored locally.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">6. Data Security</h3>
                                <p>We take the following measures to ensure the security of your data:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Encrypted Communication:</strong> All API requests are made over encrypted HTTPS connections</li>
                                    <li><strong>Local Storage:</strong> Data is only stored on your device and never sent elsewhere</li>
                                    <li><strong>API Security:</strong> Your API key is stored on your device and transmitted securely</li>
                                    <li><strong>Temporary Processing:</strong> Photos are only used during processing and are not stored</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">7. User Rights (GDPR/KVKK)</h3>
                                <p>As a user, you have the following rights:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Right to Access:</strong> Access to your data (viewable from app settings)</li>
                                    <li><strong>Right to Deletion:</strong> Delete all your data (by uninstalling the app or resetting from settings)</li>
                                    <li><strong>Right to Portability:</strong> Your data is on your device, so it belongs to you</li>
                                    <li><strong>Right to Object:</strong> You can object to data processing activities</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">8. Children's Privacy</h3>
                                <p>
                                    Caoschef does not knowingly collect personal information from children under 13.
                                    If you are under 13, you must obtain permission from your parent or guardian before using the app.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">9. Changes</h3>
                                <p>
                                    We may update this Privacy Policy from time to time. Changes will be posted on this page
                                    and the "Last Updated" date will be modified. In-app notifications may be sent for significant changes.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-chrome-white font-bold text-lg mb-2">10. Contact</h3>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                    <p className="mb-2">If you have any questions about this Privacy Policy, please contact us:</p>
                                    <p><strong>Email:</strong> support@caoschef.com</p>
                                    <p><strong>App:</strong> Settings &gt; About &gt; Support</p>
                                </div>
                            </section>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
