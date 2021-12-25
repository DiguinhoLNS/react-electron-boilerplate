export type PageRenderProps = {
    renderRoute?: boolean
    renderType?: 'default' | 'form' | 'center'
    renderComponent?: JSX.Element
    pageName?: string
    pageTitle?: string
    className?: string
}