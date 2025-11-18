import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    // Simulación de un proceso exitoso
    console.log('Simulando envío de formulario...');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simula un pequeño retraso
    
    return NextResponse.json({ message: 'Formulario enviado con éxito' }, { status: 200 });
  } catch (error) {
    console.error('Error en la API:', error);
    return NextResponse.json({ message: 'Error al procesar el formulario', error: error.message }, { status: 500 });
  }
}