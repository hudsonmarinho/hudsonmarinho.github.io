module CustomHelpers
  def age
    require 'date'

    date_current  = Date.parse("#{Time.now.day}/#{Time.now.month}/#{Time.now.year}")
    date_birthday = Date.parse("31/10/1988")
    age = (date_current - date_birthday).to_i / 365
  end
end
