const VulnerablesController = () => import('#controllers/vulnerables_controller')
import router from '@adonisjs/core/services/router'

router.resource('vulnerable', VulnerablesController).apiOnly()
