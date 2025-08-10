import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { id: 'home', icon: 'Home', label: 'Главная' },
    { id: 'music', icon: 'Music', label: 'Музыка' },
    { id: 'gallery', icon: 'ImageIcon', label: 'Галерея' },
    { id: 'tree', icon: 'TreePine', label: 'Древо' },
  ];

  const fileCategories = [
    { icon: 'Image', label: 'Фото', count: 24, color: 'bg-gradient-coral-mint' },
    { icon: 'Video', label: 'Видео', count: 12, color: 'bg-gradient-turquoise-coral' },
    { icon: 'Music', label: 'Музыка', count: 87, color: 'bg-gradient-mint-plum' },
  ];

  const recentItems = [
    {
      id: 1,
      title: 'Абстрактная композиция',
      type: 'Фото',
      price: '2,500 ₽',
      image: 'https://v3.fal.media/files/rabbit/Z6k0FyvqvS-oqzuM6l2GR_output.png',
      gradient: 'bg-gradient-coral-mint'
    },
    {
      id: 2,
      title: 'Музыкальный трек #1',
      type: 'Музыка',
      price: '1,200 ₽',
      gradient: 'bg-gradient-turquoise-coral'
    },
    {
      id: 3,
      title: 'Цифровое искусство',
      type: 'Видео',
      price: '3,800 ₽',
      gradient: 'bg-gradient-mint-plum'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white/80 backdrop-blur-sm border-r border-slate-200 p-6">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-3xl font-montserrat font-bold bg-gradient-coral-mint bg-clip-text text-transparent">
              FUTURE
            </h1>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 hover:scale-105 ${
                  activeSection === item.id
                    ? 'bg-gradient-coral-mint text-white shadow-lg'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-4xl font-montserrat font-bold text-slate-800 mb-2">
                Творческая платформа
              </h2>
              <p className="text-slate-600 text-lg">
                Продавайте свои творческие работы и развивайте карьеру артиста
              </p>
            </div>

            {/* Files Section */}
            <div className="mb-10">
              <h3 className="text-2xl font-montserrat font-semibold text-slate-800 mb-6">
                Файлы
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {fileCategories.map((category, index) => (
                  <Card
                    key={index}
                    className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 overflow-hidden"
                  >
                    <div className={`h-2 ${category.color}`}></div>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white transition-colors">
                            <Icon name={category.icon} size={24} className="text-slate-600" />
                          </div>
                          <span className="text-xl font-montserrat">{category.label}</span>
                        </div>
                        <Badge variant="secondary" className="text-sm">
                          {category.count}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recently Uploaded Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-montserrat font-semibold text-slate-800">
                  Недавно загруженное
                </h3>
                <Button 
                  variant="outline" 
                  className="hover:scale-105 transition-transform duration-200"
                >
                  Посмотреть всё
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentItems.map((item) => (
                  <Card
                    key={item.id}
                    className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0 overflow-hidden"
                  >
                    <div className="relative">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                      ) : (
                        <div className={`w-full h-48 ${item.gradient}`}></div>
                      )}
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-white/90 text-slate-700 hover:bg-white">
                          {item.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-montserrat group-hover:text-coral transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-montserrat font-bold text-mint">
                          {item.price}
                        </span>
                        <Button 
                          size="sm" 
                          className="bg-gradient-coral-mint hover:shadow-lg transition-all duration-200"
                        >
                          Купить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
              <Card className="text-center p-6 bg-gradient-coral-mint text-white border-0">
                <h4 className="text-3xl font-montserrat font-bold mb-2">127</h4>
                <p className="text-white/90">Загружено работ</p>
              </Card>
              <Card className="text-center p-6 bg-gradient-turquoise-coral text-white border-0">
                <h4 className="text-3xl font-montserrat font-bold mb-2">45</h4>
                <p className="text-white/90">Продано работ</p>
              </Card>
              <Card className="text-center p-6 bg-gradient-mint-plum text-white border-0">
                <h4 className="text-3xl font-montserrat font-bold mb-2">89</h4>
                <p className="text-white/90">Подписчиков</p>
              </Card>
              <Card className="text-center p-6 bg-slate-800 text-white border-0">
                <h4 className="text-3xl font-montserrat font-bold mb-2">₽52k</h4>
                <p className="text-white/90">Доход за месяц</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;