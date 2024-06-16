'use server'

import { db } from '@/db'

async function getProductsByCategory() {
  const categoriesProducts = await db.product.fi
}
