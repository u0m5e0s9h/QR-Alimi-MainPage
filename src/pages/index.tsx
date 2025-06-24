import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Smartphone, 
  QrCode, 
  Bell, 
  Shield, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Download,
  Apple,
  PlayCircle
} from "lucide-react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsItems = [
    {
      title: "2023 서울모빌리온 부어 로 퓨처모빌 참가",
      date: "2023.12.04",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop"
    },
    {
      title: "대한민국 위치스 코리아닷컴 업 초대형덕 Start!!!",
      date: "2023.10.10", 
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      title: "(주)알림코딩 '모바일게임' 룰 2023 SWEXCX에서 윈즈 넥 스쿠 코리아 참가!!!",
      date: "2023.09.12",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    }
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "주차장 순간의 유용하고 있는 내 게치방법?",
      description: "차량번 휴대폰 번호를 등록해 게치업무 등 휴대폰 서비스를 패키지로 먹 있는 최고의 품질의 서빌"
    },
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "설끄 편하고 안전하게!",
      description: "이동주차 요청부터 차량차시 문서시 상태에서 매번크를 통해 건드하여 정보를 보낼 수 있습니다."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "QR스캔시 안전번호 연결X",
      description: "안전번호를 연결하는 1:1 세비스에 쉽어 100% 별 네비시 정확 세제 서비스"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "차량등록 최대 3대까지, QR코드 정말 좋아 가능",
      description: "한번의 등록으로 최대 3대까지 차량 등록에서, 차량단위이로 직접 정상 실시 QR코드는 자주시 닫결 관련 추천 서비스 가능"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <QrCode className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold text-gray-900">QR알리미</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                이용방법안내
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                이용자의 이용후기
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                고객센터
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                B2B
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-yellow-400 font-medium">개인정보 지킴이</p>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  주차차량 이동요청 플랫폼, <span className="text-yellow-400">QR알리미</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                차량이동요청으로 화난 상대는 QR코드의 익닉 대화방이 보여주여 
                정보주 전화번호 는 동어 전화번호 개인정보 안전 서비스로 
                QR알리미를 통해 게치 안전 접목을 모세합니다.
              </p>
              <div className="bg-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                <QrCode className="w-8 h-8 text-black" />
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 transform rotate-3 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop" 
                  alt="Modern parking lot with cars and technology"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg transform -rotate-3"
                />
              </div>
            </div>
          </div>
          
          {/* App Download Section */}
          <div className="mt-16 flex flex-wrap gap-4">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <QrCode className="w-8 h-8 text-gray-800" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Google Play</p>
                <PlayCircle className="w-6 h-6 text-green-400" />
              </div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <QrCode className="w-8 h-8 text-gray-800" />
              </div>
              <div>
                <p className="text-sm text-gray-300">App Store</p>
                <Apple className="w-6 h-6 text-gray-300" />
              </div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=48&h=48&fit=crop" 
                alt="QR Code"
                className="w-12 h-12 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Question Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">운전하시나요?</h2>
          <h3 className="text-2xl font-medium text-gray-700 mb-8">
            혹시, 차 앞유리에 연락처를 남겨두시나요?
          </h3>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div className="text-left flex-1">
              <p className="text-gray-700 leading-relaxed">
                최근, 차량 밖에 놓아두는 연락처로 인한 개인정보 유출 사건이 많이 발생하고 있습니다. 당신의 모든 당신의 소중한 사준의 개인정보는 안전한가요?
              </p>
            </div>
            <div className="flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=120&h=80&fit=crop" 
                alt="Person concerned about privacy"
                className="w-20 h-16 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Carousel Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div className="relative h-80 bg-gradient-to-r from-blue-600 to-purple-600">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=320&fit=crop" 
                  alt="News background"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-between px-8">
                  <div className="text-white space-y-4 flex-1">
                    <div className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm inline-block">
                      뉴스
                    </div>
                    <h3 className="text-2xl font-bold">
                      "주차장에서 수상한 사람" <br />
                      새벽의 추격전
                    </h3>
                  </div>
                  <div className="text-white text-right">
                    <div className="text-sm opacity-80">SBS</div>
                  </div>
                </div>
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              👋 왜, QR알리미여야 할까요?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-yellow-600">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-yellow-500 text-black mb-8 text-lg px-4 py-2">
            📱 QR알리미 커뮤니티
          </Badge>
          <div className="relative bg-gray-900 rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=450&fit=crop" 
              alt="Technology background"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="aspect-video flex items-center justify-center relative">
              <div className="text-center space-y-6 z-10">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-white text-4xl font-bold">QR</div>
                  <div className="text-white text-4xl font-light">알리미</div>
                </div>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full">
                  <Play className="w-5 h-5 mr-2" />
                  재생
                </Button>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <div className="w-32 h-56 bg-yellow-500 rounded-2xl flex items-center justify-center transform rotate-12">
                <div className="w-28 h-52 bg-black rounded-xl flex flex-col items-center justify-center text-yellow-500">
                  <QrCode className="w-8 h-8 mb-2" />
                  <div className="text-xs text-center px-2">
                    <div>개인정보를 보호하는</div>
                    <div>주차 알림서비스</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              📰 QR알리미 소식
            </Badge>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" size="lg" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                더 많은 소식 보기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <QrCode className="w-6 h-6 text-yellow-500" />
                <span className="text-xl font-bold text-gray-900">QR알리미</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                개인정보를 보호하는 주차 알림서비스
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">회사 정보</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>(주)제제컴즈 | 대표자 : 김준경 | 사업자등록번호 : 641-88-00828</p>
                <p>통신판매업신고 : 제2021-성남수정-1335호</p>
                <p>13558 경기도 성남시 분당구 삼평동331번길 8 (판스퀘어) 209호</p>
                <p>T. 070-4252-5571 | E. help@jejecomms.com | F. 031-754-8715</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">바로가기</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-600 hover:text-yellow-600 transition-colors">
                  회사소개
                </a>
                <a href="#" className="block text-sm text-gray-600 hover:text-yellow-600 transition-colors">
                  이용약관
                </a>
                <a href="#" className="block text-sm text-gray-600 hover:text-yellow-600 transition-colors">
                  개인정보처리방침
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2025 QR알리미. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
