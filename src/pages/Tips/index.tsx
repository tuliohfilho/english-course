import {
    Title,
    Container
} from '../../components/layout';

import PresentPerfect from './PresentPerfect';

function Index() {
    return (
        <Container customClass='column'>
            <Title
                title='Tips'
                subTitle='A lot tips to facilite your learning!'
            />
            <PresentPerfect />
        </Container>
    )
}

export default Index;