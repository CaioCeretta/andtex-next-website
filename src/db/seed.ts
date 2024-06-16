import { db } from '.'

async function seed() {
  const categories = [
    { name: 'fibra' },
    { name: 'tecidos' },
    { name: 'fios' },
    { name: 'fitas' },
  ]

  for (const category of categories) {
    await db.categories.upsert({
      where: { name: category.name },
      update: {},
      create: category,
    })
  }

  const categoryFios = await db.categories.findFirst({
    where: {
      name: 'fios',
    },
  })

  if (!categoryFios) {
    throw new Error('Category fios was not found')
  }

  const productsFios = [
    {
      name: 'Fio 1',
      description: 'Description Fio 1',
      categoryId: categoryFios.id,
      image: [
        'https://www.laformosa.com.br/octopus/design/images/70/products/b/LF_Lurex500_es.jpg',
        'https://static3.tcdn.com.br/img/img_prod/738352/fio_de_aco_inox_para_cerca_industrial_1_20mm_660_metros_349_1_20191203084807.jpg',
      ],
    },
    {
      name: 'Fio 2',
      description: 'Description Fio 2',
      categoryId: categoryFios.id,
      image: [
        'https://www.laformosa.com.br/octopus/design/images/70/products/b/LF_Lurex500_es.jpg',
        'https://static3.tcdn.com.br/img/img_prod/738352/fio_de_aco_inox_para_cerca_industrial_1_20mm_660_metros_349_1_20191203084807.jpg',
      ],
    },
  ]

  for (const productData of productsFios) {
    const { name, description, image } = productData

    const product = await db.product.create({
      data: {
        name,
        description,
        category_id: categoryFios.id,
      },
    })

    for (const imageUrl of image) {
      await db.image.create({
        data: {
          url: imageUrl,
          product_id: product.id,
        },
      })
    }
  }
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
