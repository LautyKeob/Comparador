import React from 'react';
import { ImageComparator } from './components/ImageComparator';
import { Camera, Zap, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Encabezado */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comparador
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Antes y Después
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experimenta el poder de la transformación visual. Arrastra el deslizador para revelar 
              impresionantes comparaciones antes y después con controles suaves e interactivos.
            </p>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Comparación Destacada */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Transformación del Showroom Ford</h2>
            <p className="text-gray-300 text-lg">Observa la diferencia dramática en nuestro escaparate automotriz</p>
          </div>
          
          <ImageComparator
            beforeImage="/Ford Deysa 2.png"
            afterImage="/Ford Deysa 2 edit.png"
            beforeLabel="ORIGINAL"
            afterLabel="MEJORADO"
            className="max-w-4xl mx-auto"
          />
        </section>

        {/* Cuadrícula de Características */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Interacciones Fluidas</h3>
            <p className="text-gray-300">
              Controles de arrastre fluidos con respuesta táctil para dispositivos móviles y de escritorio.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Excelencia Visual</h3>
            <p className="text-gray-300">
              Hermosas animaciones y transiciones que mejoran la experiencia de comparación.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
              <Camera className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Alineación Perfecta</h3>
            <p className="text-gray-300">
              Posicionamiento preciso de imágenes que asegura comparaciones perfectas antes y después.
            </p>
          </div>
        </section>

        {/* Sección de Demostración */}
        <section className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Cómo Funciona</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Simplemente arrastra el deslizador hacia la izquierda o derecha para revelar la transformación. 
              La animación suave de clip-path crea un efecto de revelado perfecto que 
              muestra las diferencias entre tus imágenes antes y después.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                Arrastra para Comparar
              </span>
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                Compatible con Táctil
              </span>
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                Diseño Responsivo
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Pie de Página */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Comparador de Imágenes. Construido con React y Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;