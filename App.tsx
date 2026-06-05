import { Phone, Mail, Clock, CheckCircle2, Wrench, Droplets, Wind, Flame, Shield, Star, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Button, TextField, Card, CardContent, Container, Box, Typography, Rating } from '@mui/material';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  date: string;
  service: string;
}

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const [reviewForm, setReviewForm] = useState({
    name: '',
    service: '',
    rating: 5,
    comment: ''
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(([
    {
      name: 'رضا محمدی',
      text: 'پکیج ایران رادیاتور رو نصب کردن. کار تمیز و حرفه‌ای بود. راضی هستم.',
      rating: 5,
      date: 'اردیبهشت ۱۴۰۳',
      service: 'نصب پکیج'
    },
    {
      name: 'سمیرا احمدی',
      text: 'لوله‌کشی خونمون چند جا نشتی داشت. سریع درستش کردن. قیمت هم خوب بود.',
      rating: 5,
      date: 'فروردین ۱۴۰۳',
      service: 'تعمیر لوله‌کشی'
    },
    {
      name: 'علی کریمی',
      text: 'کولر صدا می‌کرد، همون روز اومدن سرویسش کردن. الان مثل اول شده.',
      rating: 5,
      date: 'خرداد ۱۴۰۳',
      service: 'سرویس کولر'
    },
    {
      name: 'زهرا نوری',
      text: 'شیر آشپزخونه خراب بود. نصب کردن و محل کار رو مرتب کردن. ممنون.',
      rating: 5,
      date: 'اسفند ۱۴۰۲',
      service: 'نصب شیرآلات'
    },
    {
      name: 'حسین رضایی',
      text: 'پکیج روشن نمی‌شد. شب بود اومدن و درستش کردن. خیلی ممنون.',
      rating: 5,
      date: 'بهمن ۱۴۰۲',
      service: 'تعمیر اضطراری پکیج'
    },
    {
      name: 'مریم صادقی',
      text: 'رادیاتور با گارانتی تهیه کردن و نصب حرفه‌ای انجام دادن. راضی هستم.',
      rating: 5,
      date: 'دی ۱۴۰۲',
      service: 'نصب رادیاتور'
    },
  ]));

  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('درخواست شما با موفقیت ثبت شد. به زودی با شما تماس می‌گیریم.');
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Testimonial = {
      name: reviewForm.name,
      text: reviewForm.comment,
      rating: reviewForm.rating,
      date: 'امروز',
      service: reviewForm.service
    };
    setTestimonials([newReview, ...testimonials]);
    setReviewForm({ name: '', service: '', rating: 5, comment: '' });
    setShowReviewForm(false);
    alert('نظر شما با موفقیت ثبت شد و پس از تایید نمایش داده خواهد شد. متشکریم!');
  };

  const services = [
    { icon: Flame, title: 'نصب و تعمیر پکیج', description: 'نصب، تعمیر و سرویس دوره‌ای پکیج‌های دیواری و زمینی ایران رادیاتور' },
    { icon: Droplets, title: 'لوله‌کشی', description: 'لوله‌کشی آب سرد و گرم، گاز و فاضلاب با بالاترین کیفیت' },
    { icon: Wrench, title: 'نصب شیرآلات', description: 'نصب و تعویض انواع شیرآلات بهداشتی و ساختمانی' },
    { icon: Wind, title: 'سرویس کولر', description: 'سرویس، تعمیر و نصب انواع کولرهای گازی و اسپلیت' },
    { icon: Shield, title: 'رادیاتور ایران', description: 'نمایندگی رسمی محصولات ایران رادیاتور با گارانتی معتبر' },
  ];

  return (
    <div className="size-full bg-gradient-to-b from-slate-50 to-white" dir="rtl">
      {/* Header/Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <Container maxWidth="lg">
          <div className="py-20 text-center">
            <div className="flex justify-center mb-6">
              <Flame className="w-20 h-20" />
            </div>
            <h1 className="mb-4" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
              نمایندگی رسمی ایران رادیاتور
            </h1>
            <p className="mb-8" style={{ fontSize: '1.5rem' }}>
              نصب و تعمیر پکیج | لوله‌کشی | شیرآلات | سرویس کولر
            </p>

            <div className="flex flex-wrap justify-center mb-8">
              <a href="tel:09124300217" className="flex items-center gap-3 bg-white text-blue-800 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors no-underline shadow-lg">
                <Phone className="w-6 h-6" />
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>۰۹۱۲-۴۳۰۰۲۱۷</span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>پاسخگویی ۲۴ ساعته</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>گارانتی معتبر</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>کارشناسان مجرب</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Services Section */}
      <Container maxWidth="lg" className="py-16">
        <h2 className="text-center mb-12" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e40af' }}>
          خدمات ما
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <service.icon className="w-12 h-12 text-blue-600" />
                  </div>
                </div>
                <h3 className="mb-2" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>

      {/* Why Choose Us Section */}
      <div className="bg-slate-100 py-16">
        <Container maxWidth="lg">
          <h2 className="text-center mb-12" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e40af' }}>
            چرا ما را انتخاب کنید؟
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                  نمایندگی رسمی ایران رادیاتور
                </h3>
                <p className="text-gray-600">ارائه محصولات اصل با گارانتی معتبر و خدمات پس از فروش</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                  تیم متخصص و مجرب
                </h3>
                <p className="text-gray-600">کارشناسان با بیش از ۱۰ سال سابقه در زمینه تاسیسات</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                  پاسخگویی ۲۴ ساعته
                </h3>
                <p className="text-gray-600">آماده خدمت‌رسانی در تمام ساعات شبانه‌روز</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                  قیمت‌های رقابتی
                </h3>
                <p className="text-gray-600">بهترین کیفیت با مناسب‌ترین قیمت</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Testimonials Section */}
      <Container maxWidth="lg" className="py-16">
        <h2 className="text-center mb-8" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e40af' }}>
          نظرات مشتریان
        </h2>

        <div className="text-center mb-8">
          <Button
            variant="contained"
            startIcon={<MessageCircle />}
            onClick={() => setShowReviewForm(!showReviewForm)}
            style={{
              backgroundColor: '#1e40af',
              fontSize: '1rem',
              padding: '10px 24px'
            }}
          >
            {showReviewForm ? 'بستن فرم نظر' : 'ثبت نظر جدید'}
          </Button>
        </div>

        {showReviewForm && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="mb-4" style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>
                نظر خود را با ما به اشتراک بگذارید
              </h3>
              <form onSubmit={handleReviewSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField
                    fullWidth
                    label="نام و نام خانوادگی"
                    variant="outlined"
                    required
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        textAlign: 'right',
                        direction: 'rtl'
                      },
                      '& .MuiInputLabel-root': {
                        right: 28,
                        left: 'auto',
                        transformOrigin: 'top right'
                      }
                    }}
                  />

                  <TextField
                    fullWidth
                    label="نوع خدمت دریافتی"
                    variant="outlined"
                    required
                    value={reviewForm.service}
                    onChange={(e) => setReviewForm({ ...reviewForm, service: e.target.value })}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        textAlign: 'right',
                        direction: 'rtl'
                      },
                      '& .MuiInputLabel-root': {
                        right: 28,
                        left: 'auto',
                        transformOrigin: 'top right'
                      }
                    }}
                  />

                  <div className="text-center">
                    <Typography component="legend" className="mb-2">امتیاز شما:</Typography>
                    <Rating
                      value={reviewForm.rating}
                      onChange={(_, newValue) => setReviewForm({ ...reviewForm, rating: newValue || 5 })}
                      size="large"
                    />
                  </div>

                  <TextField
                    fullWidth
                    label="نظر شما"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                    value={reviewForm.comment}
                    onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        textAlign: 'right',
                        direction: 'rtl'
                      },
                      '& .MuiInputLabel-root': {
                        right: 28,
                        left: 'auto',
                        transformOrigin: 'top right'
                      }
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    style={{
                      backgroundColor: '#16a34a',
                      fontSize: '1.125rem',
                      padding: '12px'
                    }}
                  >
                    ارسال نظر
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.service}</p>
                  </div>
                  <p className="text-xs text-gray-400">{testimonial.date}</p>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>

      {/* Contact Form Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <Container maxWidth="md">
          <h2 className="text-center mb-8 text-white" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
            درخواست خدمات
          </h2>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField
                    fullWidth
                    label="نام و نام خانوادگی"
                    variant="outlined"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        textAlign: 'right',
                        direction: 'rtl'
                      },
                      '& .MuiInputLabel-root': {
                        right: 28,
                        left: 'auto',
                        transformOrigin: 'top right'
                      }
                    }}
                  />

                  <TextField
                    fullWidth
                    label="شماره تماس"
                    variant="outlined"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        textAlign: 'right',
                        direction: 'rtl'
                      },
                      '& .MuiInputLabel-root': {
                        right: 28,
                        left: 'auto',
                        transformOrigin: 'top right'
                      }
                    }}
                  />

                  <TextField
                    fullWidth
                    label="نوع خدمات مورد نیاز"
                    variant="outlined"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        textAlign: 'right',
                        direction: 'rtl'
                      },
                      '& .MuiInputLabel-root': {
                        right: 28,
                        left: 'auto',
                        transformOrigin: 'top right'
                      }
                    }}
                  />

                  <TextField
                    fullWidth
                    label="توضیحات"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        textAlign: 'right',
                        direction: 'rtl'
                      },
                      '& .MuiInputLabel-root': {
                        right: 28,
                        left: 'auto',
                        transformOrigin: 'top right'
                      }
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    style={{
                      backgroundColor: '#1e40af',
                      fontSize: '1.125rem',
                      padding: '12px'
                    }}
                  >
                    ارسال درخواست
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Container>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-white py-12">
        <Container maxWidth="lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
            <div>
              <h3 className="mb-4" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                تماس با ما
              </h3>
              <div className="space-y-3">
                <a href="tel:09124300217" className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors no-underline justify-center md:justify-start">
                  <Phone className="w-5 h-5" />
                  <span style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>۰۹۱۲-۴۳۰۰۲۱۷</span>
                </a>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="w-4 h-4" />
                  <span>info@iranradiator-service.ir</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                خدمات ما
              </h3>
              <ul className="space-y-2 list-none p-0">
                <li>نصب و تعمیر پکیج</li>
                <li>لوله‌کشی ساختمان</li>
                <li>نصب شیرآلات</li>
                <li>سرویس کولر</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                ساعات کاری
              </h3>
              <div className="space-y-2">
                <p>شنبه تا پنجشنبه: ۸ صبح - ۱۰ شب</p>
                <p>جمعه: ۹ صبح - ۸ شب</p>
                <p className="text-yellow-400" style={{ fontWeight: 'bold' }}>
                  پاسخگویی اضطراری ۲۴ ساعته
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm">
            <p>© ۱۴۰۲ نمایندگی رسمی ایران رادیاتور - تمامی حقوق محفوظ است</p>
          </div>
        </Container>
      </div>
    </div>
  );
}