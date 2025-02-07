import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'ID',
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'imagePath',
      type: 'url',
      title: 'Image Path',
      validation: (Rule) => Rule.uri({ allowRelative: false, scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: 'isFeaturedProduct',
      type: 'boolean',
      title: 'Is Featured Product',
    }),
    defineField({
      name: 'stockLevel',
      type: 'number',
      title: 'Stock Level',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Chair', value: 'Chair' },
          { title: 'Table', value: 'Table' },
          { title: 'Sofa', value: 'Sofa' },
          { title: 'Bed', value: 'Bed' },
        ],
      },
    }),
  ],
});
