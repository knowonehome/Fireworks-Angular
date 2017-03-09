class Firework < ApplicationRecord
    has_many :alternate_names
    accepts_nested_attributes_for :alternate_names, allow_destroy: true,
        reject_if: lambda {|attributes| attributes["name"].blank?}
end
