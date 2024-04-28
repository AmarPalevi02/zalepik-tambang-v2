export const steps = [
  {
    id: '1',
    message: 'Apa yang ingin anda ketahui?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Apa itu transisi', trigger: 'answer1' },
      { value: 2, label: 'Mengapa harus transisi', trigger: 'answer2' },
      { value: 3, label: 'Kemudahan yang di berikan', trigger: 'answer3' },
    ],
  },
  {
    id: 'answer1',
    message: 'Kami mengembangkan aplikasi bagi enterprise berdasarkan pemahaman mendalam kami tentang teknologi. Dengan professional mindset kami, kami tidak hanya melihat dari sisi teknologi, namun lebih dari itu, kami menawarkan solusi terbaik yang dirancang khusus untuk bisnis Anda.',
    trigger: '2',
  },
  {
    id: 'answer2',
    message: 'Karena di transisi kita dapat membangun teknologi yang paling baru',
    trigger: '2',
  },
  {
    id: 'answer3',
    message: 'Kemudahan di Transisi yang mudah di akses',
    trigger: '2',
  },
  {
    id: '4',
    message: 'Semoga dapat di pahami!',
    
  },
];