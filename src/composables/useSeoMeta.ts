import { onMounted } from 'vue'

interface SeoMetaOptions {
  title: string
  description: string
}

function setMetaDescription(content: string) {
  let tag = document.querySelector('meta[name="description"]')
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', 'description')
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export function useSeoMeta({ title, description }: SeoMetaOptions) {
  onMounted(() => {
    document.title = title
    setMetaDescription(description)
  })
}
